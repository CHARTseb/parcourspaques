import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Activité introuvable')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="flex flex-col md:flex-row gap-8 p-5 max-w-6xl mx-auto py-12">
        <div className="w-full md:w-[55%]">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-yellow-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20 pointer-events-none">
              {product.emoji}
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] p-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-6 text-green-700 hover:text-green-900 transition-colors"
          >
            &larr; Retour aux activités
          </Link>
          <div className="text-4xl mb-3">{product.emoji}</div>
          <h1 className="text-3xl font-bold mb-4 text-green-900">
            {product.name}
          </h1>
          <p className="mb-6 leading-relaxed text-green-700">
            {product.description}
          </p>
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              ⏱ {product.duration}
            </span>
            <span className="inline-flex items-center gap-1 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              📊 {product.difficulty}
            </span>
          </div>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-lg bg-green-700 text-white font-medium hover:bg-green-800 transition-colors"
          >
            Voir toutes les activités
          </Link>
        </div>
      </div>
    </div>
  )
}
