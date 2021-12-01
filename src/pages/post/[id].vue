<template>
 <Layout>
   <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/post-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="post-heading">
                        <h1>苹果电脑为什么要换 CPU：Intel 与 ARM 的战争</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    2016年，苹果在 MacBook Pro 里面加了一块自己设计的 Apple T1 芯片，把 TouchID、FaceTime、TouchBar 等功都做进去了，让这块 ARM 芯片分担一些 Intel CPU 的工作。
					2018年，苹果又推出了 Apple T2。这块芯片跟 iPhone 7 的 A10 基本一致，比上一代有更强的运算能力，加入了更多的功能，比如硬件加速、媒体编解码、Siri 支持等。
					可以想象，如果笔记本的整个 CPU 都由苹果自己设计，一定会有更多的功能集成进来，苹果手机的安全特性、图形支持、视频处理、音频处理、加密解密、人工智能都可以放进桌面设备。苹果也能对它进行更好的优化，批量生产，降低成本。
					一旦苹果可以控制芯片、硬件、软件整个堆栈，就能让它们更好的协同，创造出更多多令人激动的新功能。

					Mac 电脑采用 ARM 架构后，还能实现统一的 Apple 生态，而不是现在分隔开来的 Mac 生态和 iPhone/iPad 生态。不同设备都有同样的架构，运行同样的程序，差别只是外形尺寸与性能。
                </div>
            </div>
        </div>
    </article>
 </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: '文章详情'
  }
}
</script>
