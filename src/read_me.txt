App.js
    + container -->  redux *
        + component
==============================================
-------------Redux---------------
    + action
    + sage --> api
    + reducer
==================================================================
----------------container-------------
    + ProductsManager
        + Manager 
        + ShowList
==================================================================
------------Saga----------------------
    + api
    +ProductsManager_saga
    +rootSaga

================
 o vi du nay : ta chi lam 2 thu
 +1 thuc hien hanh dong Get data su dung saga ; sau khi vao trang web conponentWillMount se gui request den trang web lay data
 sau do ComponentReciveProps se theo doi data nhan duoc va xu ly .( neu dung cac  button chung tren store thi nen tao
  1 reducer ring de sai)

  + 2 : thuc hien hanh dong add 1 form them moi; o day nhan nut add no se add them gui data .
  
  => cach thuc thuc hien cua saga do la khi co action cua component duoc kich hoat , o se nhan action do , xu ly no . sau do 
  chinh thang saga nay tao ra action ket qua , vaf cac action nay se duoc dua vao Reducer .
  tom lai : ta tao action tu component gui len saga , tu saga tao action gui len reducer.
  
