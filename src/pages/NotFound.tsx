import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-9xl font-black text-accent mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">عذراً، الصفحة غير موجودة</h2>
      <p className="text-text/70 mb-10 max-w-md">يبدو أنك وصلت إلى رابط غير متاح أو تم نقله إلى مكان آخر.</p>
      <Link to="/" className="bg-text-h text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors">
        العودة للرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
