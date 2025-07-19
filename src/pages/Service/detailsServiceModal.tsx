export function ServiceModal({ service, onClose }: any) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative bg-[#16364D] text-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 border border-white/20">
        <button
          className="absolute top-2 right-3 text-white text-3xl hover:text-red-300"
          onClick={onClose}
        >
          &times;
        </button>

        <img
          src={service.image}
          alt={service.title}
          className="rounded-xl mb-4 w-full h-48 sm:h-56 object-cover border border-white/20 shadow"
        />

        <h3 className="text-2xl font-bold mb-3 border-b pb-2 border-white/30">
          {service.title}
        </h3>

        <p className="whitespace-pre-line text-white/90 leading-relaxed text-sm sm:text-base">
          {service.detail}
        </p>
      </div>
    </div>
  );
}
