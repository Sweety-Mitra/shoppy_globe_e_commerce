import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../api";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [ product, setProduct ] = useState( null );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect( () => {
    let mounted = true;
    async function load() {
      try {
        const data = await fetchProductById( id );
        if ( !mounted ) return;
        setProduct( data );
      } catch ( err ) {
        if ( !mounted ) return;
        setError( err.message || "Failed to load product" );
      } finally {
        if ( !mounted ) return;
        setLoading( false );
      }
    }
    load();
    return () => { mounted = false; };
  }, [ id ] );

  if ( loading ) return <div style={ { padding: 20 } }>Loading product...</div>;
  if ( error ) return (
    <div style={ { padding: 20, color: "#b00020" } }>
      <h3>Unable to load product</h3>
      <p>{ error }</p>
      <button onClick={ () => window.location.reload() }>Retry</button>
    </div>
  );

  return (
    <div style={ { padding: "20px", paddingTop: "110px" } }>
      <button
        type="button"
        onClick={ () => navigate( "/" ) }
      >
        ← Back to products
      </button>
      <div style={ { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 12 } }>
        <div>
          <img src={ product.thumbnail } alt={ product.title } loading="lazy" style={ { width: "100%", borderRadius: 8 } } />
        </div>

        <div>
          <h2>{ product.title }</h2>
          <p style={ { color: "#666" } }>{ product.description }</p>
          <h3>₹ { product.price }</h3>
          <p><strong>Brand:</strong> { product.brand } • <strong>Category:</strong> { product.category }</p>

          <div style={ { marginTop: 12 } }>
            <button onClick={ () => dispatch( addToCart( product ) ) }>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
