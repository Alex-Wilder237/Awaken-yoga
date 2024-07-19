import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function YogaModal() {
  const {isOpen, onOpen,  onOpenChange} = useDisclosure();


  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button  
            variant="flat" 
            onPress={onOpen}
            className="capitalize px-16 py-10 lg:p-16 text-lg min-md:text-3xl font-bold rounded-full bg-white w-full"
          >
           Meditation
          </Button>
      
      </div>
      <Modal backdrop="blur" size="xl" isOpen={isOpen} scrollBehavior="inside" placement="center"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
          }
        }} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold text-white px-10 py-4 m-4 bg-violet rounded-3xl bg-violet-200 ">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  S'inscris au programme
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
