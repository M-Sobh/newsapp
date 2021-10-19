
 
 export default function Comment() {
     return (
         <section className="comment-sec">
             <h3>AuthorName </h3>
             <h4>wrote on d/m/y</h4>
             <p>body of the comment:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <span>
                 <button>-</button>
                 <span>0 votes</span>
                 <button>+</button>
             </span>
         </section>
     )
 }
 