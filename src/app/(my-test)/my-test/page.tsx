export default function MyTest() {
  return <div>My Test</div>;
}

MyTest.getLayout = (page) => {
  return <>{page}</>;
};
