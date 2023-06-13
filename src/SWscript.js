const $cont = document.querySelector('.cont');
      const $elsArr = [].slice.call(document.querySelectorAll('.el'));
      const $closeBtnsArr = [].slice.call(
        document.querySelectorAll('.el__close-btn')
      );

      setTimeout(function () {
        $cont.classList.remove('s--inactive');
      }, 200);

      $elsArr.forEach(function ($el) {
        $el.addEventListener('click', function () {
          if (this.classList.contains('s--active')) return;
          $cont.classList.add('s--el-active');
          this.classList.add('s--active');
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