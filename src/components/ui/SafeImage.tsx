import { useState, type ImgHTMLAttributes } from 'react'
import { ImageOff } from 'lucide-react'

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  wrapperClassName?: string
}

/**
 * Drop-in <img> replacement that never leaves blank space.
 * If the source fails to load (broken URL, offline preview, blocked host),
 * it swaps to a branded gradient placeholder instead of an empty box.
 */
export default function SafeImage({ src, alt, className = '', wrapperClassName = '', ...rest }: SafeImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-ink to-[#101A33] ${wrapperClassName}`}>
        <ImageOff size={28} className="text-white/20" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
