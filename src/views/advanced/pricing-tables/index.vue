<template>
  <div>
    <div class="air__utils__heading">
      <h5>Pricing Tables</h5>
    </div>

    <div>
      <div class="mb-5 pt-5">
        <div class="d-flex flex-wrap" :class="[$style.items, $style.separated]">
          <div class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1" :class="$style.item">
            <i class="fe fe-inbox font-size-80 mb-3 d-block"></i>
            <div class="text-dark font-weight-bold font-size-36">Free Plan</div>
            <div class="text-dark font-weight-bold font-size-48 mb-3">
              $0
              <span class="align-text-top font-size-28 text-gray-6">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>10GB of Bandwidth</li>
              <li>200MB Max File Size</li>
              <li>2GHZ CPU</li>
              <li>256MB Memory</li>
              <li>1 GB Storage</li>
            </ul>
            <a class="btn btn-primary width-100" href="javascript: void(0);">Get Access</a>
          </div>
          <div class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1" :class="$style.item">
            <i class="fe fe-cpu font-size-80 mb-3 d-block"></i>
            <div class="text-dark font-weight-bold font-size-36">Standart</div>
            <div class="text-dark font-weight-bold font-size-48 mb-3">
              $49
              <span class="align-text-top font-size-28 text-gray-6">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>20GB of Bandwidth</li>
              <li>400MB Max File Size</li>
              <li>2GHZ CPU</li>
              <li>512MB Memory</li>
              <li>2 GB Storage</li>
            </ul>
            <a class="btn btn-primary width-100" href="javascript: void(0);">Get Access</a>
          </div>
          <div class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1" :class="$style.item">
            <i class="fe fe-hard-drive font-size-80 mb-3 d-block"></i>
            <div class="text-dark font-weight-bold font-size-36">Premium</div>
            <div class="text-dark font-weight-bold font-size-48 mb-3">
              $99
              <span class="align-text-top font-size-28 text-gray-6">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>50GB of Bandwidth</li>
              <li>1GB Max File Size</li>
              <li>3GHZ CPU</li>
              <li>4096MB Memory</li>
              <li>8 GB Storage</li>
            </ul>
            <a class="btn btn-primary width-100" href="javascript: void(0);">Get Access</a>
          </div>
        </div>
      </div>

      <div class="mb-5 pt-5">
        <div class="d-flex flex-wrap">
          <div class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1" :class="$style.item">
            <i class="fe fe-inbox font-size-80 mb-3 d-block"></i>
            <div class="text-dark font-weight-bold font-size-36">Free Plan</div>
            <div class="text-dark font-weight-bold font-size-48 mb-3">
              $0
              <span class="align-text-top font-size-28 text-gray-6">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>10GB of Bandwidth</li>
              <li>200MB Max File Size</li>
              <li>2GHZ CPU</li>
              <li>256MB Memory</li>
              <li>1 GB Storage</li>
            </ul>
            <a class="btn btn-primary width-100" href="javascript: void(0);">Get Access</a>
          </div>
          <div class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1 bg-gray-1" :class="$style.item">
            <i class="fe fe-cpu font-size-80 mb-3 d-block"></i>
            <div class="text-dark font-weight-bold font-size-36">Standart</div>
            <div class="text-dark font-weight-bold font-size-48 mb-3">
              $49
              <span class="align-text-top font-size-28 text-gray-6">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>20GB of Bandwidth</li>
              <li>400MB Max File Size</li>
              <li>2GHZ CPU</li>
              <li>512MB Memory</li>
              <li>2 GB Storage</li>
            </ul>
            <a class="btn btn-primary width-100" href="javascript: void(0);">Get Access</a>
          </div>
          <div class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1" :class="$style.item">
            <i class="fe fe-hard-drive font-size-80 mb-3 d-block"></i>
            <div class="text-dark font-weight-bold font-size-36">Premium</div>
            <div class="text-dark font-weight-bold font-size-48 mb-3">
              $99
              <span class="align-text-top font-size-28 text-gray-6">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>50GB of Bandwidth</li>
              <li>1GB Max File Size</li>
              <li>3GHZ CPU</li>
              <li>4096MB Memory</li>
              <li>8 GB Storage</li>
            </ul>
            <a class="btn btn-primary width-100" href="javascript: void(0);">Get Access</a>
          </div>
        </div>
      </div>

      <div class="mb-5 pt-5">
        <div class="d-flex flex-wrap">
          <div class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1" :class="$style.item">
            <i class="fe fe-inbox font-size-80 mb-3 d-block"></i>
            <div class="text-dark font-weight-bold font-size-36">Free Plan</div>
            <div class="text-dark font-weight-bold font-size-48 mb-3">
              $0
              <span class="align-text-top font-size-28 text-gray-6">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>10GB of Bandwidth</li>
              <li>200MB Max File Size</li>
              <li>2GHZ CPU</li>
              <li>256MB Memory</li>
              <li>1 GB Storage</li>
            </ul>
            <a class="btn btn-primary width-100" href="javascript: void(0);">Get Access</a>
          </div>
          <div
            class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1 bg-primary text-white"
            :class="$style.item"
          >
            <i class="fe fe-cpu font-size-80 mb-3 d-block"></i>
            <div class="font-weight-bold font-size-36">Standart</div>
            <div class="font-weight-bold font-size-48 mb-3">
              $49
              <span class="align-text-top font-size-28">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>20GB of Bandwidth</li>
              <li>400MB Max File Size</li>
              <li>2GHZ CPU</li>
              <li>512MB Memory</li>
              <li>2 GB Storage</li>
            </ul>
            <a class="btn text-blue width-100" href="javascript: void(0);">Get Access</a>
          </div>
          <div class="pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1" :class="$style.item">
            <i class="fe fe-hard-drive font-size-80 mb-3 d-block"></i>
            <div class="text-dark font-weight-bold font-size-36">Premium</div>
            <div class="text-dark font-weight-bold font-size-48 mb-3">
              $99
              <span class="align-text-top font-size-28 text-gray-6">/mo</span>
            </div>
            <ul class="list-unstyled font-size-18 mb-5">
              <li>50GB of Bandwidth</li>
              <li>1GB Max File Size</li>
              <li>3GHZ CPU</li>
              <li>4096MB Memory</li>
              <li>8 GB Storage</li>
            </ul>
            <a class="btn btn-primary width-100" href="javascript: void(0);">Get Access</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@import "./style.module.scss";
</style>
