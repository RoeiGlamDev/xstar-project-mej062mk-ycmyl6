interface Feature {
  title: string
  description: string
  icon: JSX.Element
}

const features: Feature[] = [
  {
    title: 'High-End Quality',
    description: 'Experience the luxury of premium cosmetics crafted with the finest ingredients.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Diverse Range',
    description: 'Explore a wide variety of products tailored to every beauty need.',
    icon: <i className="fas fa-palette text-orange-500"></i>,
  },
  {
    title: 'Eco-Friendly',
    description: 'Join us in our commitment to sustainability with our eco-conscious packaging.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
]
const GlamCS: React.FC = () => {
  return (<>
<div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/ Hero Section /}
      <section className="w-full bg-orange-600 text-white p-10 text-center">
        <div
          className="text-5xl font-bold"
         }
         }
         }

          Welcome to GlamCS
        </div>
        <div
          className="mt-4 text-lg"
         }
         }
         }

          Discover your inner beauty with our luxurious cosmetics collection.
        </div>
      </section>

      {/ Features Section /}
      <section className="w-full p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose GlamCS?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center bg-gray-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
             }
             }
             }

              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/ Luxury Design Section /}
      <section className="w-full p-10 bg-orange-100">
        <h2 className="text-3xl font-bold text-center mb-8">Experience Luxury Like Never Before</h2>
        <div
          className="text-lg text-center max-w-2xl mx-auto"
         }
         }
         }

          At GlamCS, we blend innovative technology with the artistry of makeup, ensuring each product not only enhances your beauty but also provides a luxurious experience. Our advanced formulations are designed to elevate your daily routine into a moment of self-care.
        </div>
      </section>
    </div>
</>)
}
export default GlamCS
)
