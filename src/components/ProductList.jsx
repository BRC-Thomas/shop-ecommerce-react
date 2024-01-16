import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "../features/product";

export default function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  if (!products.items) {
    dispatch(getProductsList());
  }

  return (
    <div className="px-6">
      <h1 className="text-slate-100 text-2xl mb-6">Here are our products</h1>
      <ul className="grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-4">
        {products.items &&
          products.items.map((element) => (
            <li key={element.id} className="p-4 bg-slate-200 rounded">
              <img src={`/images/${element.img}.png`} alt={element.title} />
              <div className="flex justify-between items-center mb-6">
                <p className="text-slate-700 text-lg">{element.title}</p>
                <p className="text-slate-900 text-bold">{element.price}</p>
              </div>
              <button className={`${element.picked ? "bg-green-700" : "bg-slate-600"} w-full text-slate-100 px-2 inline-flex items-center justify-center rounded p-2 `}>
                {element.picked ? "Item picked ✅" : "Add to cart"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
