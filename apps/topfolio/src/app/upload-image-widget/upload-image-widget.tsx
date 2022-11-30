//To use this widget
//1: Import this widget at the top of your file, like:
// import UploadImageWidget from '../upload-image-widget/upload-image-widget';
//2: Use it as a component on your page, like:
// <UploadImageWidget callback={getUploadedImage} />
//3: By calling the getUploadedImage function, you will get an img object like this for every time you upload a picture:
//{ url: string, id: string }
//4: You can do whatever you want with it. A way to use it is to push these objects into an array state 
// const [imgArray, setImageArray] = useState<{ url: string, id: string }[]>([]);
//const getUploadedImage = (img: { url: string, id: string }) => {
//   setImageArray(array => {
//     return [
//       ...array,
//       img
//     ]
//   });
// }
//Or if you just want to use one img:
// const [img, setImage] = useState<string>('');
// const getUploadedImage = (img: { url: string, id: string }) => {
//     setImageArray(img)
//     };
//img.url is what you need to display img directly. 
//img.id is for using cloudinary after-processing pipeline.



import { useEffect, useRef } from "react";
import Button from '@mui/material/Button';
/* eslint-disable-next-line */
export interface UploadImageWidgetProps {
  callback: (imgInfo: { url: string, id: string }) => void
}

export function UploadImageWidget(props: UploadImageWidgetProps) {
  const CloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();

  useEffect(() => {
    CloudinaryRef.current = window.cloudinary;
    if (CloudinaryRef.current) {
      widgetRef.current = CloudinaryRef.current.createUploadWidget({
        cloudName: "divt6a0ys",
        uploadPreset: "gqo4iyb7"
      }, function (error: any, result: any) {
        if (result.event === 'success') {
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
    <Button variant="contained" component="label" onClick={() => widgetRef.current.open()}>
      Upload profile photo
    </Button>
  );
}

export default UploadImageWidget;
