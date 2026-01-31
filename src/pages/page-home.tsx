
import Container from "../components/container";
import Text from "../components/text";
import PhotoWidget from "../contexts/photos/components/photo-widget";

export default function PageHome() {
  
  return (
    <Container>
      <div className="grid grid-cols-5 gap-9">
        <Text variant="heading-medium">Página inicial</Text>
        <PhotoWidget photo={
          {
            id: "1",
            title: "Foto 1",
            imageId: "https://images.pexels.com/photos/16197273/pexels-photo-16197273.jpeg",
            albums: [
              {
                id: "1",
                title: "Album 1",
              },
              {
                id: "2",
                title: "Album 2",
              },
              {
                id: "3",
                title: "Album 3",
              },
            ],
          }
        } loading={false} />
        <PhotoWidget photo={
          {
            id: "1",
            title: "Foto 1",
            imageId: "https://images.pexels.com/photos/16197273/pexels-photo-16197273.jpeg",
            albums: [
              {
                id: "1",
                title: "Album 1",
              },
              {
                id: "2",
                title: "Album 2",
              },
              {
                id: "3",
                title: "Album 3",
              },
            ],
          }
        } loading={false} />
        <PhotoWidget photo={
          {
            id: "1",
            title: "Foto 1",
            imageId: "https://images.pexels.com/photos/16197273/pexels-photo-16197273.jpeg",
            albums: [
              {
                id: "1",
                title: "Album 1",
              },
              {
                id: "2",
                title: "Album 2",
              },
              {
                id: "3",
                title: "Album 3",
              },
            ],
          }
        } loading={false} />
      </div>
    </Container>
  );
}