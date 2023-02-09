import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Corousel from './corousel';

function App() {
  return (
    <div className="bg-dark">
        {/*navigasi*/}
        <Navbar />
        {/*carosel*/}
        <Corousel />
        {/*awal konten*/}
        <div className="container-fluid text-light mt-5 bg-dark">
          <div className="container mt-5">
            <div className="row bg-dark" style={{marginTop: '150px'}}>
              <div className="col-6 p-5 mb-3 mt-3"> 
                <i className="fa-solid fa-business-time fa-5x mb-2" />
                <h2 className='lh-lg'>Workspace favorite</h2> 
                <p>bisa dijadikan tempat untuk bekerja, belajar, berkumpul dengan teman, karena memili tempat yang luas dan nyaman</p>
                <a href="#" className="btn btn-outline-warning">Lihat Foto</a>
              </div>
              <div className="col-6 p-5 mb-3 mt-3"> 
                <i className="fa-solid fa-camera-retro fa-5x mb-2" />
                <h2 className='lh-lg'>Instagram Story</h2> 
                <p>sangat cocok untuk anda yang suka mengabadikan tempat-tempat yang keren, cafe ini sangat cocok untuk di post di insta story.</p>
                <a href="#" className="btn btn-outline-warning">Lihat Foto</a>
              </div>
              <div className="col-6 p-5 mb-3 mt-3"> 
                <i className="fa-solid fa-headset fa-5x mb-2" />
                <h2 className='lh-lg'>Music Hits</h2> 
                <p>Bisa sambil dengerin lagu favorite kamu, cafe ini mempunyai salon yang besar dan berisik seperti suara kenalpot beat</p>
                <a href="#" className="btn btn-outline-warning">Lihat Foto</a>
              </div>
              <div className="col-6 p-5 mb-3 mt-3"> 
                <i className="fa-solid fa-wifi fa-5x mb-2" />
                <h2 className='lh-lg'>Free Wifi</h2> 
                <p>Tersedia wifi gratis untuk anda yang tiba-yiba kehabisan paket data. tersedia limit perhari 1Gb untuk pelanggan setia</p>
                <a href="#" className="btn btn-outline-warning">Lihat Foto</a>
              </div>
              <div className="col-6 p-5 mb-3 mt-3"> 
                <i className="fa-solid fa-coffee fa-5x mb-2" />
                <h2 className='lh-lg'>Cofee</h2> 
                <p>tidak lengkap jika mengerjakan tugas tanpa ditemani oleh secangkir kopi bukan? cafe ini memiliki varian cofee yg beramcam-macam</p>
                <a href="#" className="btn btn-outline-warning">Lihat Foto</a>
              </div>
              <div className="col-6 p-5 mb-3 mt-3"> 
                <i className="fa-solid fa-joint fa-5x mb-2" />
                <h2 className='lh-lg'>Smoking Area</h2> 
                <p>Minum kopi tentu butuh penemannya bukan? cafe ini juga menyediakan rokolk-rokok yang beraneka ragam. </p>
                <a href="#" className="btn btn-outline-warning">Lihat Foto</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center mt-5 mb-5">
          <h1 style={{color: 'white'}}>Menu Favorite</h1>
        </div>
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-3">
              <div className="card text-center bg-dark" style={{color: 'rgb(255, 145, 0)', border: 'none'}}>
                <img src="/img/kopi.jpg" style={{width: '300px', borderRadius: '15px', margin: 'auto'}} />
                <h3 className="mt-2">Coffee Cappucinno</h3>
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                </div>
                <p>Rp: 45.000,00</p>
              </div>
            </div>
            <div className="col-3">
              <div className="card text-center bg-dark" style={{color: 'rgb(255, 145, 0)', border: 'none'}}>
                <img src="/img/koko.jpg" style={{width: '300px', borderRadius: '15px', margin: 'auto'}} />
                <h3 className="mt-2">Black Coffee Late</h3>
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-regular fa-star text-warning" />
                  <i className="fa-regular fa-star text-warning" />
                </div>
                <p>Rp: 30.000,00</p>
              </div>
            </div>
            <div className="col-3">
              <div className="card text-center bg-dark" style={{color: 'rgb(255, 145, 0)', border: 'none'}}>
                <img src="/img/kopiku.jpg" style={{width: '300px', borderRadius: '15px', margin: 'auto'}} />
                <h3 className="mt-2">Americano Coffee</h3>
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-regular fa-star text-warning" />
                </div>
                <p>Rp: 35.000,00</p>
              </div>
            </div>
            <div className="col-3">
              <div className="card text-center bg-dark" style={{color: 'rgb(255, 145, 0)', border: 'none'}}>
                <img src="/img/kopikita.jpg" style={{width: '300px', borderRadius: '15px', margin: 'auto'}} />
                <h3 className="mt-2">Coffee Espresso</h3>
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                  <i className="fa-sharp fa-solid fa-star text-warning" />
                </div>
                <p>Rp: 50.000,00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container mt-5">
            <div className="row">
              <div className="col-6 mt-5" style={{textAlign: 'center'}}>
                <img src="/img/ngantor 2.jpg" style={{width: '600px', borderRadius: '15px'}} />
              </div>
              <div className="col-6" style={{textAlign: 'center', margin: 'auto'}}>
                <h1>Tempat Bekerja Yang Nyaman</h1>
                <p>sebagai pekerja freelance atau pekerja WFA , sangat cocok untuk singgah dicafe kami.
                  karena memiliki tempat yang nyaman dan terjauh dari gangguan</p>
              </div>
              <div className="col-6 m-auto" style={{textAlign: 'center'}}>
                <h1>Ruangan Yang Nyaman</h1>
                <p>ruangan yang luas dan bersih, serta dilengkapi fasilitas-fasilitas yang sangat menunjang kenyamanan customer kami</p>
              </div>
              <div className="col-6 mt-5" style={{textAlign: 'center'}}>
                <img src="/img/nagntor 4.jpg" style={{width: '600px', borderRadius: '15px'}} />
              </div>
              <div className="col-6 mt-5" style={{textAlign: 'center'}}>
                <img src="/img/ngantor.jpg" style={{width: '600px', borderRadius: '15px'}} />
              </div>
              <div className="col-6 m-auto" style={{textAlign: 'center'}}>
                <h1>Teman Kesuseksanmu</h1>
                <p>jika anda pekerja freelance, kami siap menemani anda dari mulai mencari client sampai anda mendapatkan projek yang banyak..hehehee</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container mt-5 ">
            <div className="row">
              <div className="col-4 mt-5">
                <h2>resource</h2>
                <ul>
                  <li>blog</li>
                  <li>help center</li>
                  <li>release notes</li>
                  <li>status</li>
                </ul>
              </div>
              <div className="col-4 mt-5">
                <h2>comunnity</h2>
                <ul>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Podcast</li>
                </ul>
              </div>
              <div className="col-4 mt-5">
                <h2>company</h2>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Legal</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* Option 1: Bootstrap Bundle with Popper */}
      </div>
  )
}

export default App;
