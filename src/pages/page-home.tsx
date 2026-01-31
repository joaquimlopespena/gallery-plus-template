
import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {

  const photos = [
    {
      id: "1",
      title: "Foto 1",
      imageId: "https://images.pexels.com/photos/16197273/pexels-photo-16197273.jpeg",
      albums: [
        { id: "1", title: "Album 1"},
        { id: "2", title: "Album 2"},
        { id: "3", title: "Album 3"},
      ],
    },
    {
      id: "2",
      title: "Foto 2",
      imageId: "https://images.pexels.com/photos/16197273/pexels-photo-16197273.jpeg",
      albums: [
        { id: "1", title: "Album 1"},
        { id: "2", title: "Album 2"},
        { id: "3", title: "Album 3"},
      ],
    },
    {
      id: "3",
      title: "Foto 3",
      imageId: "https://images.pexels.com/photos/16197273/pexels-photo-16197273.jpeg",
      albums: [
        { id: "1", title: "Album 1"},
        { id: "2", title: "Album 2"},
        { id: "3", title: "Album 3"},
      ],
    },
  ];
  return (
    <Container>
       <AlbumsFilter
        albums={[
          { id: "3421", title: "Album 1" },
          { id: "123", title: "Album 2" },
          { id: "456", title: "Album 3" },
        ]}
        className="mb-9"
      />
      <PhotosList photos={photos} loading={false} />
    </Container>
  );
}