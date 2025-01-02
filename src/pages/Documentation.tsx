import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Code, BookOpen, Terminal, Wrench } from "lucide-react";

export function Documentation() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Documentation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            Everything you need to integrate and use our AI services
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="quickstart" className="space-y-6">
          {/* Tabs List */}
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            <TabsTrigger value="quickstart" className="flex items-center gap-2 text-sm sm:text-base">
              <Terminal className="h-4 w-4" />
              Quickstart
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2 text-sm sm:text-base">
              <BookOpen className="h-4 w-4" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2 text-sm sm:text-base">
              <Code className="h-4 w-4" />
              API Reference
            </TabsTrigger>
            <TabsTrigger value="sdk" className="flex items-center gap-2 text-sm sm:text-base">
              <Wrench className="h-4 w-4" />
              SDKs
            </TabsTrigger>
          </TabsList>

          {/* Quickstart Tab */}
          <TabsContent value="quickstart">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Installation</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-auto">
                  <code>npm install @aivolve/sdk</code>
                </pre>

                <h3 className="text-lg font-semibold mt-6">Basic Usage</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-auto">
                  <code>{`import { AivolveClient } from '@aivolve/sdk';

const client = new AivolveClient({
  apiKey: 'your-api-key'
});

// Make predictions
const result = await client.predict({
  model: 'text-classification',
  input: 'Your text here'
});`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides">
            <ScrollArea className="h-[500px] sm:h-[600px] rounded-md border p-4">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Model Training Guide</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn how to train custom models with your own data
                  </p>
                  <Card className="p-4">
                    <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
                      <li>Prepare your training data</li>
                      <li>Configure model parameters</li>
                      <li>Train the model</li>
                      <li>Evaluate performance</li>
                      <li>Deploy to production</li>
                    </ol>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Integration Tutorials</h3>
                  <p className="text-muted-foreground mb-4">
                    Step-by-step guides for integrating our AI services
                  </p>
                  <div className="grid gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold">Web Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Learn how to integrate our AI services into your web applications
                      </p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold">Mobile Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Guide for iOS and Android integration
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>

          {/* API Reference Tab */}
          <TabsContent value="api">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <h3 className="text-xl font-semibold mb-4">REST API Reference</h3>
                <div>
                  <h4 className="font-semibold">Authentication</h4>
                  <pre className="bg-muted p-4 rounded-lg mt-2 overflow-auto">
                    <code>
                      Authorization: Bearer your-api-key
                    </code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold">Endpoints</h4>
                  <div className="space-y-4 mt-2">
                    <Card className="p-4">
                      <p className="font-mono text-sm sm:text-base">POST /v1/predict</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Make predictions using trained models
                      </p>
                    </Card>
                    <Card className="p-4">
                      <p className="font-mono text-sm sm:text-base">POST /v1/train</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Train custom models with your data
                      </p>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SDKs Tab */}
          <TabsContent value="sdk">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available SDKs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">JavaScript/TypeScript</h4>
                        <p className="text-sm text-muted-foreground">
                          Official SDK for Node.js and browser environments
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Python</h4>
                        <p className="text-sm text-muted-foreground">
                          Python SDK for data science and machine learning
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
