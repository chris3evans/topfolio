import { useEffect, useRef } from "react";
import Button from '@mui/material/Button';
/* eslint-disable-next-line */
export interface UploadImageWidgetProps { }

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
        console.log(error, result)

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
