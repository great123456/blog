<template>
  <Layout>
   <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>科技周刊</h1>
                        <span class="subheading">技术 科技 随想</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <!-- Post preview-->
                <div class="post-preview">
                    <g-link to="/post/6">
                      <h2 class="post-title">苹果电脑为什么要换 CPU：Intel 与 ARM 的战争</h2>
                      <h3 class="post-subtitle">更换CPU架构的好处</h3>
                    </g-link>
                    <p class="post-meta">
                      2030-10-30
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '首页'
  }
}
</script>

<style>

</style>
