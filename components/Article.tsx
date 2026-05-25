function Article() {
  const article =
    'bg-linear-to-r from-30% from-(--vibrant-coral-100) to-(--steel-blue-100) justify-self-center w-full h-[254px] col-span-12 mt-9 rounded-[10px] border-2 shadow-(--cartoon-shadow)';

  return (
    <>
      <div className={article}>
        <h1 className='text-white font-bold text-[48px] mt-20.25 ml-13'>
          Welcome to lovely community
        </h1>
      </div>
    </>
  );
}

export default Article;
