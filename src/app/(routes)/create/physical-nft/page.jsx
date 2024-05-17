import Container from "@/components/shared/container";
import React from "react";
import PhysicalNftForm from "./physicalNftForm";
const PhysicalNFTPage = () => {
  return (
    <Container>
      <div className="mt-5 mb-12">
        <h2 className="text-5xl font-medium pt-16">Mint a Physical NFT</h2>
        <p className="text-base font-medium text-gray-400 pt-6">
          Launch your NFT collection for others to mint. Launch your NFT
          collection for.
        </p>
      </div>
      <div>
        <PhysicalNftForm />
      </div>
    </Container>
  );
};

export default PhysicalNFTPage;
