<template>
    <div id="scanner">
        <h2>{{$t('scan.header')}}</h2>
        <div class="video-wrapper">
            <video data-id="preview"></video>
        </div>
    </div>
</template>

<script>
  import instascan from 'instascan';

  export default {
    methods: {
      initScanner(){
        this.scanner = new instascan.Scanner({
          video: this.$el.querySelector('[data-id]'),
        });
      }
    },
    mounted() {
      this.initScanner();
      instascan.Camera.getCameras().then((cameras) => {
        const isCameraAvailable = cameras.length > 0;

        if (isCameraAvailable) {
          let camera = cameras[0];

          this.scanner.start(camera);

          this.scanner.addListener('scan', (content) => {
            this.$emit('scan', {
              content: content,
            });
          });
        } else {
          throw new Error('No cameras found');
        }
      });
    },
    beforeDestroy() {
      if (this.scanner) {
        this.scanner.stop();
      }
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