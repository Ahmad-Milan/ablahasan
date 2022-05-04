import React, {useState, useEffect} from 'react'
import { Modal, Carousel } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function GalleryModal({show, onHide, localImagesData, activeIndex}) {
  const [index, setIndex] = useState(activeIndex);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setIndex(activeIndex)
  }, [activeIndex])

  return (
    <Modal
      {...{show, onHide}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="gallery-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Gallery slider
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel activeIndex={index} indicators={false} onSelect={handleSelect}>
          {
            localImagesData.map((photo, i) => (
              <Carousel.Item key={i} className="overflow-hidden text-center">
                <GatsbyImage image={getImage(photo.node)} alt="photo gallery" />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Modal.Body>
    </Modal>
  )
}

export default GalleryModal