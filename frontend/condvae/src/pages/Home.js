import NavbarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import ContentComponent from '../components/ContentComponent';
import FeatureCard from '../components/FeatureCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; 

function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="feature-card-container mt-12 text-center">
        <HeaderComponent />
        <ContentComponent />
        {/* Flex Container 1 */}
        <div className="flex-container flex overflow-x-auto space-x-6 mt-12 pb-4 text-center relative z-0">
          <FeatureCard 
            title="Swap Face Gender" 
            description="This is the description for Feature One." 
            mainImage="assets/gender_original.png" 
            thumbnailImage="assets/gender_reconstructed.png"
          />
          <FeatureCard 
            title="Remove Facial Hair" 
            description="This is the description for Feature Two." 
            mainImage="assets/beard_original.png" 
            thumbnailImage="assets/beard_reconstructed.png"
          />
          <FeatureCard 
            title="Make Bald" 
            description="This is the description for Feature Three." 
            mainImage="assets/bald_original.png" 
            thumbnailImage="assets/bald_reconstructed.png"
          />
        </div>
        {/* Flex Container 2 */}
        <div className="flex-container flex overflow-x-auto space-x-6 mt-12 pb-4 text-center relative z-0">
          <FeatureCard 
            title="Add lipstick" 
            description="This is the description for Feature Two." 
            mainImage="assets/lipstick_original.png" 
            thumbnailImage="assets/lipstick_reconstructed.png"
          />
          <FeatureCard 
            title="Add Spectacles" 
            description="This is the description for Feature Two." 
            mainImage="assets/Spectacles_original.png" 
            thumbnailImage="assets/Spectacles_reconstructed.png"
          />
          <FeatureCard 
            title="Make Young" 
            description="This is the description for Feature Three." 
            mainImage="assets/young_original.png" 
            thumbnailImage="assets/young_reconstructed.png"
          />
        </div>
        {/* Flex Container 3 */}
        <div className="flex-container flex overflow-x-auto space-x-6 mt-12 pb-4 text-center relative z-0">
          <FeatureCard 
            title="Add Makeup" 
            description="This is the description for Feature One." 
            mainImage="assets/makeup_original.png" 
            thumbnailImage="assets/makeup_reconstructed.png"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
