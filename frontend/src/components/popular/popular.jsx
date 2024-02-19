import  './popular.css';
import data_product from '../Assets/data';
import Item from '../items/item';

export default function Popular(){
    return(
        <div className="popular">
            <h1>Popular in women</h1> <hr />
            <div className="popular-item">
                {data_product.map((item)=>{
                    return <Item name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>
                })}
            </div>

        </div>
    );
}