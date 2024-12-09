import Head from "next/head";
import React from "react";
import Script from "next/script";
import dynamic from 'next/dynamic';


export default function Home (){
    return (
        <div>
            <head>
            
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weframetech</title>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
    crossOrigin="anonymous"
  />
   <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-GLhlTQ8iRABQF4gIkKufDgFf67FO9cQb6j5djo6RE2t5kWxgfZ9BTSJpPpF5ZHZ2"
            crossOrigin="anonymous"
          />
  <link rel="stylesheet" href="page.css" />
  <link rel="stylesheet" href="project.js" />
  {/* Bootstrap CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  {/* Bootstrap Icons */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
    rel="stylesheet"
  />


            </head>


<div >
<>
  <div className="body">
    {/* Header */}
    <nav className="navbar navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="nav_img"
            src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733649890/ogtlf3a3zfezqbixq6pt.png
          "
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inspirations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mes favoris
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Art De La Table
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mobilier
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Nappage
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Materiel De Salle
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cuisine
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Barbecue
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tente
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Chauffage
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Podiun-piste de danse
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Son Et Lumiere
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Packs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Consommables
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Back
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    {/* Main Section */}
    <main className="container my-4">
      <div className="row">
        {/* Product Image and Thumbnails */}
        <div className="col-md-6 text-center">
          <img
            src="https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1"
            className="img-fluid mb-3"
            alt="Product"
          />
        </div>
        {/* Product Details */}
        <div className="col-md-6">
          <h2>Cheese – appareil à raclette 1/2 roue</h2>
          <p className="text-muted">39,50€ / pièce</p>
          <ul className="list-unstyled">
            <li>✅ Réglable en hauteur</li>
            <li>✅ Appareil à raclette professionnel</li>
            <li>✅ Boîtier de chauffe horizontal réglable</li>
          </ul>
          <p>
            <strong>Specifications:</strong> 220V, 900W
          </p>
          <div className="mt-4">
            <div className="quantity">
              <button className="btn ">-</button>
              <span className="quantity-value">1</span>
              <button className="btn ">+</button>
            </div>
            <button className="btn btn-primary mt-2">Add to Cart</button>
          </div>
        </div>
      </div>
      {/* Product Description */}
      <div className="mt-5">
        <h4>Description produit</h4>
        <p>
          Festivis vous propose la location un/une "Jewel – grand couteau/10pc"
          pour votre événement et ce d'es 0,35$ /piece (HTVA).Que ce soit pour
          votre mariage, une fete d'anniversaire ou du personnel,ce produit a
          fait l'objet d'une selection rigoureuse par notre equipe.ll est en
          location chez nous sous la reference "VAJGC". Nous sommes a votre
          disposition pour que les evenements de nos clients, meme en
          last-minute, soient toujours une reussite. Vous pourrez trouver tout
          une serie d'autre produit a louer de ce type dans la categorie "Art de
          la Table".
        </p>
      </div>
      <div className="box hidden">
        {/* Similar Articles Section */}
        <div className="container mt-5">
          <h4>Articles similaires</h4>
          <div className="d-flex flex-row overflow-scroll">
            <div className=" col-5 col-md-3 mb-3">
              <div className="card_box_container  mx-2">
                <img
                  src="https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1"
                  className="card-img-top"
                  alt="Table"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card_box_container mx-2 ">
                <img
                  src="https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1"
                  className="card-img-top"
                  alt="Table"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className=" card_box_container mx-2">
                <img
                  src="https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1"
                  className="card-img-top"
                  alt="Table"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card_box_container mx-2">
                <img
                  src="https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1"
                  className="card-img-top"
                  alt="Table"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            {/* Additional cards */}
          </div>
        </div>
      </div>
      <div className="box hidden">
        {/* Recommended Products */}
        <div className="mt-5">
          <h4>Ces produits pourraient vous intéresser</h4>
          <div className="row">
            <div className="col-5 col-md-3 mb-3">
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733644199/rulggzupn0gblythyamn.jpg"
                  className="card-img-top"
                  alt="Recommended"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733644199/rulggzupn0gblythyamn.jpg"
                  className="card-img-top"
                  alt="Recommended"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733644199/rulggzupn0gblythyamn.jpg"
                  className="card-img-top"
                  alt="Recommended"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733644199/rulggzupn0gblythyamn.jpg"
                  className="card-img-top"
                  alt="Recommended"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733644199/rulggzupn0gblythyamn.jpg"
                  className="card-img-top"
                  alt="Recommended"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733644199/rulggzupn0gblythyamn.jpg"
                  className="card-img-top"
                  alt="Recommended"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733644199/rulggzupn0gblythyamn.jpg"
                  className="card-img-top"
                  alt="Recommended"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-3 mb-3">
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733644199/rulggzupn0gblythyamn.jpg"
                  className="card-img-top"
                  alt="Recommended"
                />
                <div className="card-body">
                  <h6 className="card-title">Title</h6>
                  <p className="text-muted">0.35€/Pièce</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box hidden">{/* Additional cards */}</div>
        </div>
      </div>
    </main>
    <header className="text-center py-4">
      <h1 className="display-5">
        On s'occupe de <span className="text-primary">tout</span>
      </h1>
      <p>Office ipsum you must be muted.it meeting commitment busy pain.</p>
    </header>
    <section className="container my-5">
      <div className="row text-center">
        <div className="col-md-3">
          <i className="bi bi-box-arrow-left-right" />
          <h5>Livraison &amp; Reprise</h5>
          <p>Selon vos besoins</p>
        </div>
        <div className="col-md-3">
          <i className="bi bi-brush" />
          <h5>Nettoyage</h5>
          <p>Selon vos besoins</p>
        </div>
        <div className="col-md-3">
          <i className="bi bi-cart-check" />
          <h5>Commande Illimitée</h5>
          <p>Tout est possible</p>
        </div>
        <div className="col-md-3">
          <i className="bi bi-truck" />
          <h5>Transport &amp; Enlèvement</h5>
          <p>On s'occupe de tout</p>
        </div>
      </div>
    </section>
  </div>
  <div className="box hidden">
    <section className="bg-light py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733637287/qhe1rjkh2m7mzlhralbq.jpg"
              alt="Living Room"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center contaner">
            <h2>
              S'inscrire &amp; économiser{" "}
              <span className="text-primary">10%</span>
            </h2>
            <p className="text-muted">
              Office ipsum you must be muted.Synergize helicopter prioritize
              anyway job due harvest most opportunity didnt. Yet busy any
              meeting shark light marginalised 4-blocker message.Productize
              corporate nail caught synergy highlights lunch.Company another
              pushback items dear or any.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="john@doe.com"
              />
              <button type="submit" className="btn btn-primary">
                S'INSCRIRE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="box hidden">
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Infos Pratiques</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Livraisons &amp; Reprises
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Légal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  CGU
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Nous suivre</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram" />
              </a>
            </div>
            <img
              className="nav_img m-4"
              src="https://res.cloudinary.com/dfgnhkktl/image/upload/v1733649890/ogtlf3a3zfezqbixq6pt.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
    {/* Bootstrap JS */}
  </div>
</>

</div>

    <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></Script>
    <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></Script>
    <Script src="https://kit.fontawesome.com/ac42c3b1f7.js" crossOrigin="anonymous"></Script>
     <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>   




    
  </div>
  );
}