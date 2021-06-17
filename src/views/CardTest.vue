<template>
      <div class="row">
        <div class="col-md-3">
          <div class="wsk-cp-product">
            <div class="wsk-cp-img">
              <img
                src="../assets/pic/Aleister_the_Invoker.jpg"
                alt="Product"
                class="img-responsive"
              />
            </div>
            <div class="wsk-cp-text">
              <!-- <div class="category">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm ml-auto"
                >
                  MORE
                </button>
              </div> -->
              <div class="title-product">
                <h3>召喚師阿萊斯特</h3>
              </div>
              <div class="">
                <div class="d-flex justify-content-around">
                  <div>
                    <del class="h7">$1000</del>
                    <div class="h5">$200</div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm ml-auto"
                  >
                    <i class="fas fa-spinner fa-spin"></i>
                    加進牌組
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <button class="deck">
        <span class="badge rounded-pill bg-primary" >
          <div id="order">2</div>
        </span>
      </button>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i");
body {
  font-family: "Muli", sans-serif;
  background: #ddd;
}
/* .shell {
  padding: 80px 0;
} */
.wsk-cp-product {
  background: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  margin: 20px auto;
}
.wsk-cp-img {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  -moz-transform: translate(-50%);
  -o-transform: translate(-50%);
  -khtml-transform: translate(-50%);
  width: 100%;
  padding: 15px;
  transition: all 0.2s ease-in-out;
}
.wsk-cp-img img {
  width: 100%;
  transition: all 0.2s ease-in-out;
  border-radius: 6px;
}
.wsk-cp-product:hover .wsk-cp-img {
  top: -20px;
}
.wsk-cp-product:hover .wsk-cp-img img {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
.wsk-cp-text {
  padding-top: 150%;
}
.wsk-cp-text .category {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 45px;
  position: relative;
  transition: all 0.2s ease-in-out;
}
.wsk-cp-text .category > * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -khtml-transform: translate(-50%, -50%);
}
.wsk-cp-text .category > span,
button {
  padding: 12px 30px;
  border: 1px solid #313131;
  background: #212121;
  color: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 27px;
  transition: all 0.05s ease-in-out;
}
.wsk-cp-product:hover .wsk-cp-text .category > span,
button {
  border-color: #ddd;
  box-shadow: none;
  padding: 11px 28px;
}
.wsk-cp-product:hover .wsk-cp-text .category {
  margin-top: 0px;
}
.wsk-cp-text .title-product {
  text-align: center;
}
.wsk-cp-text .title-product h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 15px auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}
.wsk-cp-text .description-prod p {
  margin: 0;
}
/* Truncate */
.wsk-cp-text .description-prod {
  text-align: center;
  width: 100%;
  height: 62px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 15px;
}
.card-footer {
  padding: 25px 0 5px;
  border-top: 1px solid #ddd;
}
.card-footer:after,
.card-footer:before {
  content: "";
  display: table;
}
.card-footer:after {
  clear: both;
}

.card-footer .wcf-left {
  float: left;
}

.card-footer .wcf-right {
  float: right;
}

.price {
  font-size: 18px;
  font-weight: bold;
}

a.buy-btn {
  display: block;
  color: #212121;
  text-align: center;
  font-size: 18px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;
  border: 1px solid #212121;
  transition: all 0.2s ease-in-out;
}
a.buy-btn:hover,
a.buy-btn:active,
a.buy-btn:focus {
  border-color: #ff9800;
  background: #ff9800;
  color: #fff;
  text-decoration: none;
}
.wsk-btn {
  display: inline-block;
  color: #212121;
  text-align: center;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  border-color: #ff9800;
  background: #ff9800;
  padding: 12px 30px;
  border-radius: 27px;
  margin: 0 5px;
}
.wsk-btn:hover,
.wsk-btn:focus,
.wsk-btn:active {
  text-decoration: none;
  color: #fff;
}
.red {
  color: #f44336;
  font-size: 22px;
  display: inline-block;
  margin: 0 5px;
}
@media screen and (max-width: 991px) {
  .wsk-cp-product {
    margin: 40px auto;
  }
  .wsk-cp-product .wsk-cp-img {
    top: -40px;
  }
  .wsk-cp-product .wsk-cp-img img {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
  .wsk-cp-product .wsk-cp-text .category > span,
  button {
    border-color: #ddd;
    box-shadow: none;
    padding: 11px 28px;
  }
  .wsk-cp-product .wsk-cp-text .category {
    margin-top: 0px;
  }
  a.buy-btn {
    border-color: #ff9800;
    background: #ff9800;
    color: #fff;
  }
}
.deck{
  background-image: url('../assets/pic/deck.png');
  height: 80px;
  width: 80px;
  background-size: cover;
  border-radius: 40px;
  position: relative;
}
.badge{
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>
