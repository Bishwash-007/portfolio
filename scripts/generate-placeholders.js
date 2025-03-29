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
  'david'
];

async function generatePlaceholder(name) {
  const outputPath = path.join(testimonialsDir, `${name}.webp`);
  
  try {
    // Create a 200x200 image with a gradient background
    await sharp({
      create: {
        width: 200,
        height: 200,
        channels: 4,
        background: { r: 39, g: 39, b: 42, alpha: 1 } // zinc-800
      }
    })
    .webp({ quality: 80, effort: 6 })
    .toFile(outputPath);
    
    console.log(`✅ Generated placeholder for ${name}`);
  } catch (error) {
    console.error(`❌ Error generating placeholder for ${name}:`, error);
  }
}

async function generateAllPlaceholders() {
  console.log('🔄 Generating placeholder images...\n');
  
  for (const name of testimonials) {
    await generatePlaceholder(name);
  }

  console.log('\n✨ Placeholder generation complete!');
}

generateAllPlaceholders(); 