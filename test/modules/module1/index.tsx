import { Module, customModule, Container, VStack } from '@ijstech/components';
import ScomMediaPlayer from '@scom/scom-media-player'
@customModule
export default class Module1 extends Module {

    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
    }

    render() {
        return <i-panel>
            <i-scom-media-player
                url="https://playertest.longtailvideo.com/adaptive/alt-audio-no-video/sintel/playlist.m3u8"
                // url="https://video.ijs.dev/3210752f-56a4-11ed-80cd-0242ac120003/index.m3u8"
                // url="https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8"
            ></i-scom-media-player>
        </i-panel>
    }
}