import { Card } from "../card";

export function PorchCam({ scale, noBorder }) {
    return (
        <div style={{ width: `${2560 * scale}px`, height: `${1920 * scale}px`, overflow: 'hidden', borderRadius: !noBorder ? '8px' : null }}>
            <iframe
                src={process.env.REACT_APP_RTSP + "/stream.html?src=porch-cam"}
                style={{ pointerEvents: 'none', width: `${2560 * scale}px`, height: `${1920 * scale}px`, }}
                allowFullScreen
            />
        </div>
    )
}