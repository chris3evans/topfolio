# To use the upload image widget
## 1: Import this widget at the top of your file, like:
 import UploadImageWidget from '../upload-image-widget/upload-image-widget';
## 2: Use it as a component on your page, like:
```javascript
 <UploadImageWidget callback={getUploadedImage} />
``` 
## 3: By calling the getUploadedImage function, you will get an img object like this for every time you upload a picture:
```javascript
{ url: string, id: string }
```
## 4: You can do whatever you want with it. A way to use it is to push these objects into an array state 
```javascript
 const [imgArray, setImageArray] = useState<{ url: string, id: string }[]>([]);
const getUploadedImage = (img: { url: string, id: string }) => {
  setImageArray(array => {
     return [
       ...array,
       img
     ]
   });
 }
 ```
## Or if you just want to use one img:
```javascript
 const [img, setImage] = useState<string>('');
 const getUploadedImage = (img: { url: string, id: string }) => {
     setImageArray(img)
     };
 ```
img.url is what you need to display img directly. 
img.id is for using cloudinary after-processing pipeline.