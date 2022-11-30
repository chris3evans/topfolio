import { useEffect, useRef } from "react";
import Button from '@mui/material/Button';
/* eslint-disable-next-line */
export interface UploadImageWidgetProps {
  callback: (imgInfo: { url: string, id: string }) => void
}

export function UploadImageWidget(props: UploadImageWidgetProps) {
  const CloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();
  console.log(CloudinaryRef.current, "CloudinaryRef.current")

  useEffect(() => {
    CloudinaryRef.current = window.cloudinary;
    if (CloudinaryRef.current) {
      widgetRef.current = CloudinaryRef.current.createUploadWidget({
        cloudName: "divt6a0ys",
        uploadPreset: "gqo4iyb7"
      }, function (error: any, result: any) {
        // console.log(error, result, "cloudinary e@r")
        if (result.event === 'success') {
          console.log(result, "result obj")
          const imgInfo = {
            url: result.info.secure_url,
            id: result.info.public_id

          }
          props.callback(imgInfo);
        }

      })
    }

  }, [])
  return (
    // <button onClick={() => widgetRef.current.open()}></button>
    <Button variant="contained" component="label" onClick={() => widgetRef.current.open()}>
      Upload Picture
    </Button>

  );
}

export default UploadImageWidget;
