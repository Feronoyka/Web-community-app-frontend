function Community({
  id,
  title,
  url,
}: {
  id: number;
  title: string;
  url: string;
}) {
  return (
    <>
      <div>{url}</div>
      <h3>{id}</h3>
      <p>{title}</p>
    </>
  );
}

export default Community;
