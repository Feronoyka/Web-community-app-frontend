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
    <div className='rounded-xl bg-[#F6BD60] w-[442px] h-[482px] text-center'>
      <img src={url} alt='bg-picture' />
      <h3 className='text-lg font-semibold'>{id}</h3>
      <p className='w-[331px] mx-auto'>{title}</p>
    </div>
  );
}

export default Community;
