<template>
    <div>
        <div id="scanner">
            <h2>Scan your code</h2>
            <div class="video-wrapper">
                <video :id="videoId"></video>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
          videoId: {
              type: String,
              required: true
          }
        },
        data() {
            return {
                scanProperty: {
                    instanceScan: require('instascan'),
                    scanner: null,
                    camera: null
                }
            }
        },
        mounted(){
            let ctx = this;
            if (!ctx.scanProperty.scanner) {
                ctx.scanProperty.scanner = new ctx.scanProperty.instanceScan.Scanner({
                    video: document.getElementById(ctx.videoId)
                });
            }
            ctx.scanProperty.instanceScan.Camera.getCameras().then(function (cameras) {
                if (cameras.length > 0) {
                    ctx.scanProperty.scanner.start(cameras[0]);
                    ctx.scanProperty.camera = cameras[0];
                    ctx.scanProperty.scanner.addListener('scan', function (content) {
                        ctx.$emit('qrScaned', {
                            content: content,
                            scanner: ctx.scanProperty.scanner,
                            camera: ctx.scanProperty.camera
                        });
                    });
                } else {
                    console.log(errorMessage)
                }
            });
        },
    };

</script>

<style scoped>
    #scanner {
        margin: 100px auto;
        width: 500px;
        text-align: center;
        font-weight: 200;
    }
    .video-wrapper {
        border-radius: 5px;
        position: relative;
    }
    .video-wrapper video {
        display: block;
        width: 100%;
    }
</style>