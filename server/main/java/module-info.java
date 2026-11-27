module com.soniccandle.www {
	requires com.acromere.soniccandle;

	requires org.slf4j;

	// Core Spring Boot modules
	requires spring.boot;
	requires spring.boot.autoconfigure;
	requires spring.context;
	requires spring.beans;
	requires spring.core;
	requires spring.webmvc;

	// Optional: Web & Data modules (add as needed)
	requires spring.web;
	// requires spring.data.jpa;
	// requires jakarta.persistence;

	// Open packages so Spring can use reflection for DI, proxies, and entities
	opens com.soniccandle.www to spring.core, spring.beans, spring.context;
	//opens com.soniccandle.www.controller to spring.core, spring.beans, spring.web;

	// Export packages needed by other modules or libraries
	exports com.soniccandle.www;
}