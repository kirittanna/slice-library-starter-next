import Card from "../components/card";
import InfiniteSlider from "../components/infinite-slider";

const Page = () => {
  return (
    <div
      style={{
        position: "relative",
        minWidth: "100vw",
        minHeight: "100vh"
      }}
    >
      <InfiniteSlider items={Array(7)} width={1000}>
        {() => (
          <Card
            title="Lorem Ipsum"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            category=""
            image="https://picsum.photos/600/800?grayscale"
          />
        )}
      </InfiniteSlider>
    </div>
  );
};

export default Page;
