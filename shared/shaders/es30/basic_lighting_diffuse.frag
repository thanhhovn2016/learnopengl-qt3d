#version 300 es
#undef lowp
#undef mediump
#undef highp

precision lowp float;

in vec3 normal;
in vec3 fragPos;

out vec4 color;

uniform vec3 lightPos;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
	// Ambient
	float ambientStrength = .1;
	vec3 ambient = ambientStrength * lightColor;

	// Diffuse
	vec3 norm = normalize(normal);
	vec3 lightDir = normalize(lightPos - fragPos);
	float diff = max(dot(norm, lightDir), 0.);
	vec3 diffuse = diff * lightColor;

	vec3 result = (ambient + diffuse) * objectColor;
	color = vec4(result, 1.);
}
