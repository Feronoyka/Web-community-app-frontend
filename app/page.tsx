import Content from '@/components/Content';
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='grid-container'>
        <Main />
        <Content />
        {/* <div className='item'>Column 1</div>
        <div className='item'>Column 2</div>
        <div className='item'>Column 3</div>
        <div className='item'>Column 4</div>
        <div className='item'>Column 5</div>
        <div className='item'>Column 6</div>
        <div className='item'>Column 7</div>
        <div className='item'>Column 8</div>
        <div className='item'>Column 9</div>
        <div className='item'>Column 10</div>
        <div className='item'>Column 11</div>
        <div className='item'>Column 12</div> */}
      </div>
    </div>
  );
}
