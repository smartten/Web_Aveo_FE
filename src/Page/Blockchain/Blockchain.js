import "./style.scss";
import { Collapse } from "antd";
import {
  ArrowRightOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
const { Panel } = Collapse;
function Blockchain() {
  const onChange = (key) => {
    console.log(key);
  };

  const question = [
    {
      question: "What is a blockchain?",
      answer:
        "A blockchain is a distributed, cryptographically-secure database structure that allows network participants to establish a trusted and immutable record of transactional data without the need for intermediaries. A blockchain can execute a variety of functions beyond transaction settlement, such as smart contracts. Smart contracts are digital agreements that are embedded in code and that can have limitless formats and conditions. Blockchains have proven themselves as superior solutions for securely coordinating data, but they are capable of much more, including tokenization, incentive design, attack-resistance, and reducing counterparty risk. The very first blockchain was the Bitcoin blockchain, which itself was a culmination of over a century of advancements in cryptography and database technology.",
    },
    {
      question: "What is a blockchain database?",
      answer:
        "Historically, databases have incorporated a centralized client-server architecture, in which a sole authority controls the central server. This design means that data security, alteration, and deletion rests with a single point of failure. The decentralized architecture of blockchain databases emerged as a solution for many of the weaknesses of centralized database architecture. A blockchain network consists of a large number of distributed nodes––voluntary participants who must reach consensus and maintain a single transactional record togethe",
    },
    {
      question: "What is a blockchain system?",
      answer:
        "A blockchain system refers to all the aspects and features that go into a particular blockchain, everything from the consensus algorithm to the state machine to cryptographic functions. As Andreas Antonopoulus and Gavin Wood note in Mastering Ethereum, there are “a huge variety of blockchains with different properties”--qualifiers “help us understand the characteristics of the blockchain in question, such as open, public, decentralized, neutral, and censorship-resistant.”",
    },
    {
      question: "How does a blockchain work?",
      answer:
        "When a digital transaction occurs in a blockchain network, it is grouped together in a cryptographically-secure “block” with other transactions that have occurred in the same time frame. The block is then broadcast to the network. A blockchain network is comprised of nodes or participants who validate and relay transaction information. The block of transactions is verified by participants called miners, who use computing power to solve a cryptographic puzzle and validate the block of transactions. The first miner to solve and validate the block is rewarded. Each verified block is connected to the previously verified block, creating a chain of blocks. One important cryptographic underpinning of blockchains is the hash function. Hashing assigns a fixed value to a string that is inputted into the system. Blockchain hashing power results in a deterministic, quickly-computable, and preimage-resistant system. Explore our knowledge base to learn more about how a blockchain works.",
    },
    {
      question: "What is a blockchain application?",
      answer:
        "Blockchain applications are comparable to conventional software applications, except they implement a decentralized architecture and cryptoeconomic systems to increase security, foster trust, tokenize assets, and design new network incentives. Here are over 90 Ethereum apps that are currently being used across the Ethereum blockchain ecosystem, from prediction markets to smart legal agreements.",
    },
    {
      question: "What are the benefits of blockchain technology?",
      answer:
        "Blockchain technology has a wide variety of benefits, for both global enterprises and local communities. The most commonly cited benefits of a blockchain are trusted data coordination, attack-resistance, shared IT infrastructure, tokenization, and built-in incentivization.",
    },
    {
      question: "What is the blockchain revolution?",
      answer:
        "Blockchain is considered a disruptive technology because of its ability to safeguard personal information, reduce intermediaries, unlock digital assets, and potentially open up the global economy to millions more participants. Sometimes called the Trust Machine, blockchain technology is bringing transparency and security to digital networks across countless industries. In many ways, the blockchain revolution can be considered a revolution in trust.",
    },
    {
      question: "What is a block in a blockchain?",
      answer:
        "The “block” in a blockchain refers to a block of transactions that has been broadcast to the network. The “chain” refers to a string of these blocks. When a new block of transactions is validated by the network, it is attached to the end of an existing chain. This chain of blocks is an ever-growing ledger of transactions that the network has validated. We call this single, agreed-upon history of transactions a blockchain. Only one block can exist at a given chain height. There are several ways to add new blocks to an existing chain. These are often termed “proofs,” i.e. Proof of Work (PoW), Proof of Stake (PoS), and Proof of Authority (PoA). All involve cryptographic algorithms with varying degrees of complexity",
    },
    {
      question: "What is a blockchain wallet?",
      answer:
        "A blockchain wallet contains the public key for others to transfer cryptocurrency to your address and the private key so you can securely access your own digital assets. A blockchain wallet usually accompanies node hosting and stores cryptocurrencies on your computer. The safest place for storing digital assets is offline, what is often called “cold storage.” Read “7 Pro Tips for Keeping Your Crypto Safe” for some best practices on protecting your digital assets.",
    },
    {
      question: "What is blockchain programming?",
      answer:
        "As a new technology that makes use of global digital networks, the need for blockchain programmers is immense, and in recent years, programmers have flocked to the blockchain space. A key aspect that distinguishes blockchain programming from other Internet ventures is the focus on security and cryptography. ConsenSys Academy’s Developer Program offers programmers from any background the chance to become a blockchain expert in weeks. Industry experts from around the world teach the course, which focuses on Ethereum blockchain development.",
    },
    {
      question: "What is a private blockchain?",
      answer:
        "Blockchains began as open source, public efforts. Private blockchains were developed as corporations and other administrative bodies began to realize the benefits of distributed ledger technology, particularly within systems of a private enterprise and when managing sensitive transaction data. With increasingly robust and modular privacy and permissioning solutions, industry experts anticipate that private and public blockchain networks will converge.",
    },
    {
      question: "What are zk-SNARKs?",
      answer:
        "zk-SNARK is an acronym for zero-knowledge succinct non-interactive argument of knowledge, a cryptographic proof system that enables a user to verify a transaction without revealing the actual data of the transaction, and without interacting with the user who published the transaction. In the context of a blockchain, zk-SNARKs allow users to maintain private transactions, while still validating the transactions according to the network's consensus algorithm. For a technical walkthrough of zk-SNARKs, check out our introduction to zk-SNARKs.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="body">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Blockchain</span>
                  </p>
                  <p className="sub-text">
                    Build your trusted networks with blockchain technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="secction-title-1 mb-5">
          <p className="text-title">Blockchain Applications </p>
        </section>
        <div className="container">
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://bkaii.com.vn/images/blockchain.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Financial Services</p>
              <p className="text-content">
                Without a central authority to verify transactions, settlements
                can be made faster and cheaper using blockchain technology.
                Blockchain also simplifies logistically complicated cross-border
                transactions involving different types of financial assets.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Internet of Things</p>
              <p className="text-content">
                The centralized architecture of the current crop of IoT
                platforms is being reinvented with the help of blockchain
                technology to facilitate decentralized and autonomous
                interaction between devices, towards building a more
                cost-efficient and trusted IoT.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://bkaii.com.vn/images/blockchain.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://bkaii.com.vn/images/blockchain.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Healthcare</p>
              <p className="text-content">
                A consolidated and easily transferable secure record of health
                data is a potential blockchain-based innovation in healthcare. A
                shared data infrastructure provides interoperable access to
                health data, leading to better clinical decisions.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Retail</p>
              <p className="text-content">
                Premium products can be tracked from their point of origin using
                digital tokens to protect them from counterfeits in the supply
                chain. Easily redeemable multi-brand loyalty program based on
                blockchain technologies is another emerging use case.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://bkaii.com.vn/images/blockchain.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://bkaii.com.vn/images/blockchain.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Government</p>
              <p className="text-content">
                Digital citizen record keeping over a blockchain network helps
                avoid procedural delays caused by conventional methods of
                establishing the authenticity of information across government
                agencies. The technology helps speed up public service delivery
                and makes it more transparent.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Warranty Services</p>
              <p className="text-content">
                Warranty details of products purchased can be stored on a
                blockchain in a trusted and globally accessible manner. Warranty
                service providers can easily look up this information before
                they provide the service, sparing customers the hassle of
                registration and paperwork.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://bkaii.com.vn/images/blockchain.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </section>
        </div>
        <section className="our-approach">
          <div className="container">
            <p className="title-1">
              How we implementing your successful blockchain technology
            </p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">1</span>
                  </p>
                </div>
                <div className="title">Identify and Set Goals</div>
                <div className="list">
                  <ul>
                    <li>Identify use cases your blockchain can leverage</li>
                    <li>Come up with new use cases</li>
                    <li>Finalize the list and set up the goal</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">2</span>
                  </p>
                </div>
                <div className="title">Developing POC</div>
                <div className="list">
                  <ul>
                    <li>Brainstorming with your team</li>
                    <li>Sketch up the POC based on the result</li>
                    <li>Planning</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">3</span>
                  </p>
                </div>
                <div className="title">Build and Trial</div>
                <div className="list">
                  <ul>
                    <li>Build a prototype according to the POC</li>
                    <li>Testing in the real situation</li>
                    <li>Evaluate the errors and fix</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">4</span>
                  </p>
                </div>
                <div className="title">Roll Out and Observe</div>
                <div className="list">
                  <ul>
                    <li>Roll out your prototype on the market</li>
                    <li>Benchmark checking to meet requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="imgv1 d-flex align-items-center">
          <div className="container mt-5">
            <h2>
              What new technology does is create new opportunities to do a job
              that customers want done. - "Tim O'Reilly"
            </h2>
          </div>
        </div>
        <section className="secction-title-1 mb-5">
          <p className="title">The benefit of</p>
          <p className="sub-title">PARTNERING WITH DEHA</p>
        </section>
        <div className="container">
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Operational agility and speed to value</p>
              <p className="text-content">
                Optimize multiparty workflows around trusted data and accelerate
                performance across your value chain.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Cost takeout and risk mitigation</p>
              <p className="text-content">
                Streamline shared processes, increase accountability, minimize
                disputes and automate reconciliation tasks.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">New monetization opportunities</p>
              <p className="text-content">
                Increase brand trust and sales with product authenticity and
                open new marketplaces with asset tokenization.
              </p>
            </div>
          </section>
        </div>
        <section className="our-favourite-stacks">
          <div className="container pt-5">
            <div className="text-title text-center">
              <h3 className="text-title-1">Our Favourite Stacks</h3>
              <h2 className="text-title-2">Technologies Expertise</h2>
            </div>
            <div style={{ height: "300px" }}></div>
          </div>
        </section>

        <section className="asked-questions container">
          <h2 className="text-title-2">Frequently Asked Questions</h2>
          <div className="collapse-questions row mt-5">
            <div className="col-md-6 faq-container">
              {question.map((item, i) => (
                <div className="row-item">
                  <div className="faq-question">
                    <div
                      className="question-content"
                      style={{ borderBottom: "1px solid" }}
                    >
                      <a className="desc btn" onClick={() => toggle(i)}>
                        <b className={selected === i ? "text-color" : ""}>
                          {item.question}
                        </b>
                        <span>
                          {selected === i ? (
                            <CaretUpOutlined className="text-color" />
                          ) : (
                            <CaretDownOutlined />
                          )}
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      selected === i
                        ? "col faq-answer show"
                        : "col faq-answer collapse"
                    }
                  >
                    <div
                      className="card card-body"
                      style={{ backgroundColor: "#efefef", margin: "10px 0px" }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="schedule container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <a href="#" className="btn-schedule">
            Schedule time to talk <ArrowRightOutlined />
          </a>
        </section>
        <section className="our-clients">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="title">
                  <p className="text-v1">Our Clients</p>
                  <p className="text-v2">Trusted by over 300+ clients</p>
                  <p className="text-v3">
                    We bring solutions to make life easier for our customers.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Blockchain;
