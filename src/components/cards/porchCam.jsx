import { Card } from "../card";

export function PorchCam({ scale }) {
    return (
        <Card
            title='Porch Cam'
        >
            <div style={{ width: `${2560 * scale}px`, height: `${1920 * scale}px`, overflow: 'hidden', borderRadius: '8px' }}>
                <iframe
                    src={process.env.REACT_APP_RTSP + "/stream.html?src=porch-cam"}
                    style={{ pointerEvents: 'none', width: `${2560 * scale}px`, height: `${1920 * scale}px`, }}
                    allowFullScreen
                />
            </div>
        </Card>
    )
}