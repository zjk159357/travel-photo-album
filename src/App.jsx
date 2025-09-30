
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('/photos.json')
      .then(res => res.json())
      .then(setPhotos)
      .catch(() => console.error('无法加载照片列表'))
  }, [])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-pink-600">
        🌏 我的旅行相册
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={src}
              alt={`Photo ${i}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default App
