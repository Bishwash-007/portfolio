import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const testimonialsDir = path.join(process.cwd(), 'public', 'testimonials');

// Ensure the testimonials directory exists
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

const testimonials = [
  'john',
  'jane',
  'mike',
  'sarah',
  'david',
  'default'
];

async function convertImage(inputName, outputName) {
  const inputPath = path.join(testimonialsDir, `${inputName}.jpg`);
  const outputPath = path.join(testimonialsDir, `${outputName}.webp`);

  try {
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Warning: ${inputPath} not found`);
      return;
    }

    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    
    console.log(`✅ Converted ${inputName}.jpg to ${outputName}.webp`);
  } catch (error) {
    console.error(`❌ Error converting ${inputName}.jpg:`, error);
  }
}

async function convertAllImages() {
  console.log('🔄 Starting image conversion...\n');
  
  for (const name of testimonials) {
    await convertImage(name, name);
  }

  console.log('\n✨ Image conversion complete!');
}

convertAllImages(); 