/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
//https://mozilla.github.io/pdf.js/examples/
import { useState } from "react";
import { loadScript } from "./utils";

const Preview = () => {
    const [url, setUrl] = useState("");
    const changeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
        if (event.target.value.endsWith("pdf")) {
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.0.375/pdf.min.mjs", "module");

            if (!(window as any).pdfjsLib) {
                return;
            }
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.0.375/pdf.worker.mjs`;
            const pdf = await window.pdfjsLib.getDocument(event.target.value).promise;
            const page = await pdf.getPage(1);
        }
    };

    async function renderTextLayer(page, viewport, container) {
        const textContent = await page.getTextContent();
        const textLayerDiv = document.createElement("div");
        textLayerDiv.classList.add("text-layer");

        textContent.items.forEach((textItem) => {
            const span = document.createElement("span");
            span.textContent = textItem.str;

            span.style.left = `${textItem.transform[4]}px`;
            span.style.top = `${viewport.height - textItem.transform[5]}px`;
            span.style.fontSize = `${textItem.height}px`;
            span.style.transformOrigin = "0 0";
            span.style.transform = `scaleX(${textItem.transform[0]})`;

            span.style.whiteSpace = "nowrap";
            span.style.position = "absolute";
            span.style.userSelect = "text";
            textLayerDiv.appendChild(span);
        });

        container.appendChild(textLayerDiv);
    }

    const changeFileHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                if (!event.target) return;
                const pdf = await window.pdfjsLib.getDocument(event.target.result).promise;
                const page = await pdf.getPage(1);
                const viewport = page.getViewport({ scale: 1.5 });
                const container = document.getElementById("preview");
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                container.appendChild(canvas);
                const textLayerDiv = document.createElement("div");
                textLayerDiv.className = "text-layer";
                textLayerDiv.style.width = viewport.width + "px";
                textLayerDiv.style.height = viewport.height + "px";
                container.appendChild(textLayerDiv);

                // Render the page and text layer
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };

                await page.render(renderContext);

                // Get text content
                const textContent = await page.getTextContent();
                const textLayer = new pdfjsLib.TextLayerBuilder({
                    textLayerDiv: textLayerDiv,
                    pageIndex: pageNumber - 1,
                    viewport: viewport,
                });

                textLayer.setTextContent(textContent);
                textLayer.render();
            };
            reader.readAsDataURL(file);
        }
        console.log(event.target);
    };
    return (
        <>
            {/* <iframe src="https://km-prod-s3-bucket.s3.amazonaws.com/KOMMUNICATE/APP/prod_kom/253789f2670b833362b314f6bc63d3feb/_Attachment/678eda80-237a-49b5-ae17-5bce24e83ad1_d23ab685d6d20b61996218fa1eda8c8b0724bf54_KM_BUCKET_basics-of-banking-097aed24.pdf" /> */}
            <input type="text" onChange={changeHandler} style={{ border: "1px solid red" }} />;
            <input type="file" onChange={changeFileHandler} style={{ border: "1px solid red" }} />;
            <div id="preview"></div>
        </>
    );
};

export default Preview;
