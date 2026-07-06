function Article() {
  const article =
    'bg-linear-to-r from-30% from-(--vibrant-coral-100) to-(--steel-blue-100) justify-self-center w-full h-[254px] col-span-12 mt-9 rounded-[10px] border-2 shadow-(--cartoon-shadow)';

  return (
    <>
      <div className={article}>
        <div className='mx-13 mt-15 max-[1024px]:mx-7'>
          <h1 className='text-white font-bold text-5xl max-[1024px]:text-[40px]'>
            Welcome to Ventus forum
          </h1>
          <p className='text-gray-300 mt-4'>
            Where you can create own forum and discuss any specific stuff
          </p>
        </div>
      </div>
    </>
  );
}

export default Article;
