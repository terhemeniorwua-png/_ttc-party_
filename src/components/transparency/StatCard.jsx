export default function StatCard({ label, amount, badgeText, badgeColor, icon: Icon, iconBg }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs font-bold text-gray-mutedText uppercase">{label}</p>
        <h3 className="font-heading font-extrabold text-2xl text-navy mt-1">
          ₦{Number(amount).toLocaleString()}
        </h3>
        <p className={`text-[11px] font-bold mt-1 ${badgeColor}`}>{badgeText}</p>
      </div>
      <div className={`p-3 rounded-2xl ${iconBg}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}