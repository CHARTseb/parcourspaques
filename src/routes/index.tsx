import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'

export const Route = createFileRoute('/')({
  component: ProductsIndex,
})

function ProductsIndex() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-yellow-50 to-green-50 py-20 px-5 text-center">
        <div className="text-6xl mb-4">🐣</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">
          Parcours Pâques
        </h1>
        <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto">
          Découvrez nos activités et animations pour toute la famille.
          Chasses aux œufs, ateliers créatifs, jeux et surprises vous attendent !
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm text-green-600">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>Tout le week-end de Pâques</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👨‍👩‍👧‍👦</span>
            <span>Pour tous les âges</span>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="p-5 py-16">
        <h2 className="text-2xl font-bold mb-12 text-center text-green-900">
          Les Activités
        </h2>
        <div className="max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row items-stretch gap-8 mb-24 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-[60%]">
                <Link
                  to="/products/$productId"
                  params={{
                    productId: product.id.toString(),
                  }}
                  className="block"
                >
                  <div className="w-full aspect-[4/3] relative">
                    <div className="w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-yellow-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-30 pointer-events-none">
                        {product.emoji}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-full md:w-[50%] md:my-12">
                <div className="rounded-2xl p-8 border border-green-200 bg-white">
                  <div className="text-3xl mb-3">{product.emoji}</div>
                  <h3 className="text-2xl font-bold mb-3 text-green-900">
                    {product.name}
                  </h3>
                  <p className="mb-4 leading-relaxed text-green-700">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full">
                      ⏱ {product.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                      📊 {product.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-green-50 py-12 px-5 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Infos Pratiques</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-semibold text-green-900">Lieu</h3>
            <p className="text-green-700 text-sm">Parc Municipal</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🕐</div>
            <h3 className="font-semibold text-green-900">Horaires</h3>
            <p className="text-green-700 text-sm">10h - 17h</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🎟️</div>
            <h3 className="font-semibold text-green-900">Entrée</h3>
            <p className="text-green-700 text-sm">Gratuit</p>
          </div>
        </div>
      </div>
    </div>
  )
}
