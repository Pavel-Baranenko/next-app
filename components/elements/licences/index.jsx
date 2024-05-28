
import React, { useState } from 'react';




const Licence = () => {
  const [images2, setImagesSecond] = useState({
    // title: "",
    // descr: "",
    size: 0,
    photosSecond: []
  });
  const { title, descr, photosSecond } = images2

  const handleImg = (e) => {
    setImagesSecond({
      ...images2,
      [e.target.name]: e.target.value
    })
  }

  const [hightlight, setHightlight] = useState(false)

  const handleFileChangesecond = e => {
    const files = e.target.files;
    const photosSecondArrSecond = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        const fileobjSecond = {
          name: file.name,
          type: file.type,
          size: file.size,
          src: reader.result
        };

        console.log(fileobjSecond.size);
        photosSecondArrSecond.push(fileobjSecond);
        setImagesSecond({
          ...images2,
          // size:
          photosSecond: [...photosSecond, ...photosSecondArrSecond]
        })
      })
    }
  }

  const handleDeleteImgSecond = (e) => {
    let target = e.target.parentElement;
    let targetindex = target.dataset.imgindex;
    setImagesSecond({
      ...images2,
      // size:
      photosSecond: [...photosSecond.slice(0, targetindex), ...photosSecond.slice(targetindex + 1)]
    })
  }
  const handlehightlight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHightlight(true);
  }
  const handleunhightlight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHightlight(false)
  }
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let dt = e.dataTransfer;
    let files = dt.files;

    console.log(files);
  }

  return (
    <div className="file-upload">
      <form className="" encType="multipart /form-data">

        <div className={hightlight ? "custom-form-group file-blue" : "custom-form-group"}>
          {photosSecond.length == 0 && <div className="custom-file-drop-area ">
            <input type="file" name="photosSecond" placeholder="Enter photosSecond" multiple="true" id="filephotosSecond"
              onChange={handleFileChangesecond}
              onDragEnter={handlehightlight}
              onDragOver={handlehightlight}
              onDragLeave={handleunhightlight}
              onDrop={handleDrop}
            />
            <label htmlFor="filephotosSecond" className='file-input-click'>
              Загрузите изображение
            </label>
          </div>
          }
          <div className="custom-file-preview custom-file-preview-2">
            {photosSecond.length > 0 && photosSecond.map((item, index) => (
              <div className="prev-img" key={index} data-imgindex={index}>
                <span onClick={handleDeleteImgSecond}></span>
                <img src={item.src} alt={item.name} />
              </div>
            ))}
            {photosSecond.length > 0 && <div className="mini-drop-area custom-file-drop-area">
              <input type="file" name="photosSecond" placeholder="Enter photosSecond" multiple="true" id="filephotosSecond" onChange={handleFileChangesecond} />
              <label htmlFor="filephotosSecond" >
                <img src="./img/photos.svg" alt="" />
              </label>
            </div>

            }

          </div>

        </div>
        {/* <button type="submit" className="btn-submit">Submit</button> */}
      </form>
    </div>
  )
}

export default Licence;