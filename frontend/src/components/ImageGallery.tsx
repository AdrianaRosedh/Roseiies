import Image from 'next/image'

export default function ImageGallery() {
  return (
    <div className="flex flex-col space-y-4">
      <Image
        src="https://roseiies.com/path/to/image.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <Image
        src="https://roseiies.ai/path/to/another-image.png"
        alt="Description of another image"
        width={600}
        height={400}
      />
    </div>
  )
}