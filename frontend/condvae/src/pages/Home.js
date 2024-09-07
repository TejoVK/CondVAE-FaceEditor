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
            description="Change facial features to swap gender." 
            mainImage="assets/gender_original.png" 
            thumbnailImage="assets/gender_reconstructed.png"
          />
          <FeatureCard 
            title="Remove Facial Hair" 
            description="Remove facial hair for a smooth look." 
            mainImage="assets/beard_original.png" 
            thumbnailImage="assets/beard_reconstructed.png"
          />
          <FeatureCard 
            title="Make Bald" 
            description="Get a bald look by removing all hair." 
            mainImage="assets/bald_original.png" 
            thumbnailImage="assets/bald_reconstructed.png"
          />
        </div>
        {/* Flex Container 2 */}
        <div className="flex-container flex overflow-x-auto space-x-6 mt-12 pb-4 text-center relative z-0">
          <FeatureCard 
            title="Add lipstick" 
            description="Apply lipstick to enhance lip color." 
            mainImage="assets/lipstick_original.png" 
            thumbnailImage="assets/lipstick_reconstructed.png"
          />
          <FeatureCard 
            title="Add Spectacles" 
            description="Add glasses to complement the face." 
            mainImage="assets/Spectacles_original.png" 
            thumbnailImage="assets/Spectacles_reconstructed.png"
          />
          <FeatureCard 
            title="Make Young" 
            description="Rejuvenate the face for a youthful look." 
            mainImage="assets/young_original.png" 
            thumbnailImage="assets/young_reconstructed.png"
          />
        </div>
        {/* Flex Container 3 */}
        <div className="flex-container flex overflow-x-auto space-x-6 mt-12 pb-4 text-center relative z-0">
          <FeatureCard 
            title="Add Makeup" 
            description="Apply makeup to enhance facial features." 
            mainImage="assets/makeup_original.png" 
            thumbnailImage="assets/makeup_reconstructed.png"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
