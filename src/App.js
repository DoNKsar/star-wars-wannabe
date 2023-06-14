import './App.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const $cont = document.querySelector('.cont');
    const $elsArr = Array.from(document.querySelectorAll('.el'));
    const $closeBtnsArr = Array.from(document.querySelectorAll('.el__close-btn'));

    setTimeout(function () {
      $cont.classList.remove('s--inactive');
    }, 200);

    $elsArr.forEach(function ($el) {
      $el.addEventListener('click', function () {
        if ($el.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        $el.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function ($btn) {
      $btn.addEventListener('click', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');

        const activeElement = document.querySelector('.el.s--active');
        if (activeElement !== null) {
          activeElement.classList.remove('s--active');
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="cont s--inactive">
        <div className="cont__inner">
          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Darth Vader</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">"You possess the audacity to challenge the might of the Empire, and I, Darth Vader, acknowledge your valor." </div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Darth Revan</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">"In the crucible of my own transformation, I have become the embodiment of balance. Embrace the harmony within your own inner conflicts, for through them, true power is found. Rise, and let the galaxy bear witness to the legacy of Darth Revan."</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Obi-Wan Kenobi</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">"Hope is a flame that flickers within, even in the face of despair. Nurture it, protect it, for it is the catalyst that ignites change. Let hope guide your steps, and in the darkest moments, it will be your steadfast companion, lighting the way to a brighter tomorrow."</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Darth Malgus</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">"The galaxy trembles before Darth Malgus, the harbinger of a new era. Embrace the power of the dark side and witness the unstoppable force of my will. Submit or be consumed by the storm I unleash upon the feeble remnants of the Jedi Order."</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading">Boba Fett</h2>
                </div>
                <div className="el__content">
                  <div className="el__text">"I am Boba Fett, the galaxy's relentless hunter. Fear my name, for no one escapes my grasp."</div>
                  <div className="el__close-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
