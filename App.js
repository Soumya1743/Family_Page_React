import logo from './logo.svg';
import './App.css';
import my_family from './MyFamily.jpg';
import cousin1_family from './Cousin1_Family.jpg';
import cousin2_family from './Cousin2_Family.jpg';
import uncle1_family from './Uncle1_Family.jpeg';

import aarav from './Aarav.jpeg';
import nitya from './Nitya.jpeg';
import srikanth from './Srikanth.jpeg';
import uncle1 from './Uncle1.jpeg';
import aunt1 from './Aunt1.jpeg';
import cousin1 from './Cousin1.jpg';
import cousin2 from './Cousin2.jpg';
import sister from './Sister.jpg';
import brother from './Brother.jpg';
import me from './Me.png';

function App() {
  return (
    <>
      <div class="header">
        <h1 id="heading">FAMILY TREE</h1>
      </div>
      
      <div class="abc">
        <div class="groups">
          <a href='#myfamily'><img src={my_family} class="image5"></img></a>
          <a href='#uncle1_family'><img src={uncle1_family} class="image6"></img></a>
          <a href='#uncle2_family'><img src='' class="image7"></img></a>
          <a href='#cousin1_family'><img src={cousin1_family} class="image8"></img></a>
          <a href='#cousin2_family'><img src={cousin2_family} class="image9"></img></a>
        </div>

        
        <div id="myfamily">
          <div class="sub_container">
            <div id="soumya">
              <span class="span1">
                <h2 class="heading1">SOUMYA</h2>
                <img src={me} class="image1"></img>
              </span>
              <span class="span2">
                <p>My name is <i>Soumya Rangaiahgari.</i></p>
                <p>I have completed my <i>Graduation</i> in 2024.</p>
                <p><b>Date-of-Birth : </b><i>20th May 2002</i></p>
              </span>
            </div>

            <div id="father">
              <span class="span1">
                <h2 class="heading1">FATHER</h2>
                <img src="https://soumya1743.github.io/Family_Page/dad.jpg" class="image2"></img>
              </span>
              <span class="span2">
                <p>My Father name is <i>Thirupathi Reddy Rangaiahgari.</i></p>
                <p><b>Profession : </b> My Father is a <i>Campus Incharge of Vikas High School.</i></p>
                <p><b>Date-of-Birth : </b><i>3rd May 1966</i></p>
              </span>
            </div>

            <div id="mother">
              <span class="span1">
                <h2 class="heading1">MOTHER</h2>
                <img src="https://soumya1743.github.io/Family_Page/mom.jpg" class="image3"></img>
              </span>
              <span class="span2">
                <p>My Mother name is <i>Sujatha Rangaiahgari.</i></p>
                <p>My Mother is a <i>House Wife.</i></p>
                <p><b>Date-of-Birth : </b><i>6th May 1975</i></p>
              </span>
            </div>

            <div id="sister">
              <span class="span1">
                <h2 class="heading1">SISTER</h2>
                <img src={sister} class="image4"></img>
              </span>
              <span class="span2">
                <p>My Sister name is <i>Sneethika Rangaiahgari.</i></p>
                <p>My Sister is studying <i>B.Tech 3rd year</i>.</p>
                <p><b>Date-of-Birth : </b><i>1st September 2003</i></p>
              </span>
            </div>
          </div>
        </div>


        <div id="uncle1_family">
          <div class="sub_container">
            <div id="soumya">
              <span class="span1">
                <h2 class="heading1">UNCLE</h2>
                <img src={uncle1} class="image1"></img>
              </span>
              <span class="span2">
                <p>My Uncle name is <i>Hanumantha Reddy.</i></p>
                <p><b>Profession:</b> My Uncle is a <i>Police ( ASI ), Special Branch.</i></p>
                <p><b>Date-of-Birth : </b><i>8th August 1964</i></p>
              </span>
            </div>

            <div id="father">
              <span class="span1">
                <h2 class="heading1">AUNT</h2>
                <img src={aunt1} class="image2"></img>
              </span>
              <span class="span2">
                <p>My Aunt name is <i>Vimala.</i></p>
                <p>She is a <i>House Wife.</i></p>
                <p><b>Date-of-Birth : </b> <i>1st January 1968</i></p>
              </span>
            </div>

            <div id="mother">
              <span class="span1">
                <h2 class="heading1">COUSIN</h2>
                <img src={cousin1} class="image3"></img>
              </span>
              <span class="span2">
                <p>My Cousin name is <i>Archana.</i></p>
                <p>She a <i>House Wife.</i></p>
                <p><b>Date-of-Birth : </b> <i>12th April 1986</i></p>
              </span>
            </div>

            <div id="sister">
              <span class="span1">
                <h2 class="heading1">COUSIN</h2>
                <img src={cousin2} class="image4"></img>
              </span>
              <span class="span2">
                <p>My Cousin name is <i>Anusha.</i></p>
                <p>She is a <i>House Wife.</i></p>
                <p><b>Date-of-Birth : </b> <i>22nd August 1989</i></p>
              </span>
            </div>
          </div>
        </div>


        <div id="uncle2_family">
          <div class="sub_container">
            <div id="soumya">
              <span class="span1">
                <h2 class="heading1">UNCLE</h2>
                <img src="" class="image1"></img>
              </span>
              <span class="span2">
                <p>My Uncle name is <i>Bal Reddy.</i></p>
                <p><b>Profession:</b> He is a <i>Supervisor.</i></p>
                <p><b>Date-of-Birth : </b><i></i></p>
              </span>
            </div>

            <div id="mother">
              <span class="span1">
                <h2 class="heading1">AUNT</h2>
                <img src="" class="image3"></img>
              </span>
              <span class="span2">
                <p>My Aunt name is <i>Shoba.</i></p>
                <p>She is a <i>House Wife.</i></p>
                <p><b>Date-of-Birth : </b><i></i></p>
              </span>
            </div>

            <div id="sister">
              <span class="span1">
                <h2 class="heading1">COUSIN</h2>
                <img src={brother} class="image4"></img>
              </span>
              <span class="span2">
                <p>My Brother name is <i>Ranadeep Reddy.</i></p>
                <p><b>Profession : </b>He is a <i>Software Engineer</i>.</p>
                <p><b>Date-of-Birth : </b> <i>9th May 1997</i></p>
              </span>
            </div>
          </div>
        </div>


        <div id="cousin1_family">
          <div class="sub_container">
            <div id="soumya">
              <span class="span1">
                <h2 class="heading1">SRIKANTH REDDY</h2>
                <img src={srikanth} class="image1"></img>
              </span>
              <span class="span2">
                <p>My Brother-in-law name is <i>Srikanth Reddy.</i></p>
                <p><b>Profession : </b>He is a <i>Business Man</i>.</p>
                <p><b>Date-of-Birth : </b> <i>22nd January 1980</i></p>
              </span>
            </div>

            <div id="father">
              <span class="span1">
                <h2 class="heading1">ARCHANA</h2>
                <img src={cousin1} class="image2"></img>
              </span>
              <span class="span2">
                <p>My Cousin name is <i>Archana.</i></p>
                <p>She is a <i>House Wife</i>.</p>
                <p><b>Date-of-Birth : </b> <i>10th April 1987</i></p>
              </span>
            </div>

            <div id="mother">
              <span class="span1">
                <h2 class="heading1">NIECE</h2>
                <img src={nitya} class="image3"></img>
              </span>
              <span class="span2">
                <p><b>Name : </b><i>Nitya.</i></p>
                <p>She is studying <i>8th Grade</i>.</p>
                <p><b>Date-of-Birth : </b><i>3rd Febraury 2012</i></p>
              </span>
            </div>

            <div id="sister">
              <span class="span1">
                <h2 class="heading1">NEPHEW</h2>
                <img src={aarav} class="image4"></img>
              </span>
              <span class="span2">
                <p><b>Name : </b><i>Aarav.</i></p>
                <p>He is studying <i>2nd Grade</i>.</p>
                <p><b>Date-of-Birth : </b><i>27th August 2016</i></p>
              </span>
            </div>
          </div>
        </div>


        <div id="cousin2_family">
          <div class="sub_container">
            <div id="soumya">
              <span class="span1">
                <h2 class="heading1">SRIDHAR REDDY</h2>
                <img src="" class="image1"></img>
              </span>
              <span class="span2">
                <p>My Brother-in-law name is <i>Sridhar Reddy.</i></p>
                <p><b>Profession : </b><i>He is a School Teacher</i>.</p>
                <p><b>Date-of-Birth : </b><i>25th July 1982</i></p>
              </span>
            </div>

            <div id="father">
              <span class="span1">
                <h2 class="heading1">ANUSHA</h2>
                <img src="" class="image2"></img>
              </span>
              <span class="span2">
                <p>My Cousine name is <i>Anusha</i>.</p>
                <p>She is a <i>House Wife</i>.</p>
                <p><b>Date-of-Birth : </b><i>22nd August 1989</i></p>
              </span>
            </div>

            <div id="mother">
              <span class="span1">
                <h2 class="heading1">NEPHEW</h2>
                <img src="" class="image3"></img>
              </span>
              <span class="span2">
                <p><b>Name : </b><i>Sreehith.</i></p>
                <p>He is studying <i>4th Grade.</i></p>
                <p><b>Date-of-Birth : </b><i>7th December 2014</i></p>
              </span>
            </div>

            <div id="sister">
            <span class="span1">
                <h2 class="heading1">NEPHEW</h2>
                <img src="" class="image3"></img>
              </span>
              <span class="span2">
                <p><b>Name : </b><i>Aarvik.</i></p>
                <p>He is studying <i>1st Grade.</i></p>
                <p><b>Date-of-Birth : </b> <i>23rd October 2017</i></p>
              </span>
            </div>
          </div>
        </div>

      </div>
      
    </>

  );
}

export default App;